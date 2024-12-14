from flask import Flask, request, jsonify, session 
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash , check_password_hash
from emailTest import enviar_correo
import os
import mysql.connector

app = Flask(__name__)
app.secret_key = os.urandom(24)  # Clave secreta para sesiones
#app.secret_key = 'una_clave_secreta_segura_y_larga'
CORS(app, origins=["http://localhost:5173"], methods=["GET", "POST", "OPTIONS"], supports_credentials=True)


# Configuración de la base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@localhost/clinica'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SESSION_COOKIE_PATH'] = '/'
app.config['SESSION_COOKIE_DOMAIN'] = 'localhost'
app.config['SESSION_COOKIE_HTTPONLY'] = True


db = SQLAlchemy(app)

# Definición del modelo
class Usuario(db.Model):
    id_usuario = db.Column(db.Integer, primary_key=True)
    tdni = db.Column(db.String(100), nullable=False)
    dni = db.Column(db.String(100), unique=True, nullable=False)
    paterno = db.Column(db.String(100), nullable=False)
    materno = db.Column(db.String(100), nullable=False)
    nombres = db.Column(db.String(100), nullable=False)
    fnac = db.Column(db.Date, nullable=False)
    genero = db.Column(db.Enum('M', 'F', 'Otro'))
    celular = db.Column(db.String(100))
    pais = db.Column(db.String(100), nullable=False)
    departamento = db.Column(db.String(100), nullable=False)
    provincia = db.Column(db.String(100), nullable=False)
    distrito = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100))
    rol = db.Column(db.Enum('paciente', 'especialista', 'admin'), nullable=False)
    fecha_registro = db.Column(db.DateTime, default=db.func.current_timestamp())
    imagen_perfil_url = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(200), nullable=False)

class Cita(db.Model):
    __tablename__ = 'citas'
    id_cita = db.Column(db.Integer, primary_key=True)
    id_paciente = db.Column(db.Integer, db.ForeignKey('usuario.id_usuario'), nullable=False)
    id_especialista = db.Column(db.Integer, db.ForeignKey('usuario.id_usuario'), nullable=False)
    fecha_hora = db.Column(db.DateTime, nullable=False)
    motivo_consulta = db.Column(db.Text, nullable=True)
    estado = db.Column(db.Enum('pendiente', 'confirmada', 'cancelada', 'completada'), nullable=False, default='pendiente')  


# Crear las tablas en la base de datos
with app.app_context():
    db.create_all()

# Endpoint para registrar usuarios
@app.route('/register', methods=['POST'])
def register_user():
    data = request.json
    hashed_password = generate_password_hash(data['dni'], method='pbkdf2:sha256')

    new_user = Usuario(
        tdni=data['tdni'],
        dni=data['dni'],
        paterno=data['paterno'],
        materno=data['materno'],
        nombres=data.get('nombres'),
        fnac=data['fnac'],
        genero=data.get('genero'),
        celular=data.get('celular'),
        pais=data.get('pais'),
        departamento=data.get('departamento'),
        provincia=data.get('provincia'),
        distrito=data.get('distrito'),
        email=data.get('email'),
        rol="paciente",
        fecha_registro=data.get('fecha_registro'),
        imagen_perfil_url="no-imge.png",
        password=hashed_password,
    )
    
    try:
        # Envía el correo de bienvenida
        
        db.session.add(new_user)
        db.session.commit()
        enviar_correo(new_user.email)  # Llama a la función para enviar el correo

        
        
        return jsonify({"message": "Usuario registrado exitosamente."}), 201
    except Exception as e:
        db.session.rollback()
        print(f"Error al registrar el usuario: {e}")
        return jsonify({"error": str(e)}), 400
    
     #Endpoint para login
@app.route('/login', methods=['POST'])
def login_user():
    data = request.json
    user = Usuario.query.filter_by(email=data['email']).first()
    #obtiene el email enviado desde el front y lo busca en la base de datos si existe

    #verifica la existencia del usuario
    if user:
        #contaseña de la base de datos este en formato bytes
        # # Convierte la contraseña almacenada a bytes
        if check_password_hash(user.password, data['password']): # Convierte la contraseña del login a bytes y la compara
            # Iniciar sesión y almacenar el rol del usuario en el backend
            session['user_id'] = user.id_usuario
            session['email'] = user.email
            session['role'] = user.rol

            # Devolver el rol y el mensaje al frontend
            return jsonify({
                'message': 'Login exitoso',
                'role': user.rol,
                'info':{
                    
                "id_usuario": user.id_usuario,
                "tdni": user.tdni,
                "dni": user.dni,
                "paterno": user.paterno,
                "materno": user.materno,
                "nombres": user.nombres,
                "genero": user.genero,
                "celular": user.celular,
                "departamento": user.departamento,
                "provincia": user.provincia,
                "distrito": user.distrito,
                "email": user.email,
                "imagen_perfil_url": user.imagen_perfil_url
            
                }
            }), 200
        else:
            return jsonify({'message': 'Credenciales incorrectas'}), 401
    else:
        return jsonify({'message': 'Usuario no encontrado'}), 404


    
# Endpoint de logout
@app.route('/logout', methods=['GET'])
def logout():
    session.clear()
    return jsonify({"message": "Logout exitoso"}), 200

# Endpoints javier
# buscar usuario por id
@app.route('/user-info', methods=['GET'])
def get_user_info():
    # Verifica si hay un usuario autenticado en la sesión
    if 'user_id' in session:
        user_id = session['user_id']
        user = Usuario.query.get(user_id)  # Busca al usuario en la base de datos

        # Verifica si el usuario existe
        if user:
            # Devuelve la información del usuario
            return jsonify({
                "id_usuario": user.id_usuario,
                "tdni": user.tdni,
                "dni": user.dni,
                "paterno": user.paterno,
                "materno": user.materno,
                "nombres": user.nombres,
                "fnac": user.fnac.strftime("%Y-%m-%d"),  # Formato de fecha
                "genero": user.genero,
                "celular": user.celular,
                "pais": user.pais,
                "departamento": user.departamento,
                "provincia": user.provincia,
                "distrito": user.distrito,
                "email": user.email,
                "rol": user.rol,
                "fecha_registro": user.fecha_registro.strftime("%Y-%m-%d %H:%M:%S"),
                "imagen_perfil_url": user.imagen_perfil_url
            }), 200
        else:
            return jsonify({"message": "Usuario no encontrado"}), 404
    else:
        return jsonify({"message": "No hay usuario autenticado"}), 401



# Endpoint para obtener la lista de todos los pacientes
@app.route('/get-pacientes', methods=['GET'])
def get_pacientes():
    pacientes = Usuario.query.filter_by(rol='paciente').all()  # Filtra los usuarios con rol 'paciente'
    
    # Si hay pacientes en la base de datos
    if pacientes:
        pacientes_list = []
        for paciente in pacientes:
            pacientes_list.append({
                "id_usuario": paciente.id_usuario,
                "tdni": paciente.tdni,
                "dni": paciente.dni,
                "paterno": paciente.paterno,
                "materno": paciente.materno,
                "nombres": paciente.nombres,
                "fnac": paciente.fnac.strftime("%Y-%m-%d"),  # Formato de fecha
                "genero": paciente.genero,
                "celular": paciente.celular,
                "pais": paciente.pais,
                "departamento": paciente.departamento,
                "provincia": paciente.provincia,
                "distrito": paciente.distrito,
                "email": paciente.email,
                "rol": paciente.rol,
                "fecha_registro": paciente.fecha_registro.strftime("%Y-%m-%d %H:%M:%S"),
                "imagen_perfil_url": paciente.imagen_perfil_url
            })
        return jsonify({"pacientes": pacientes_list}), 200
    else:
        return jsonify({"message": "No hay pacientes registrados."}), 404
    
# Función para obtener la conexión a la base de datos MySQL
def get_db_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='root',
        database='clinica'
    )
    return connection

# Ruta para guardar los datos de la cita
@app.route('/guardar_cita', methods=['POST'])
def guardar_cita():
    data = request.get_json()

    # Datos que recibimos del frontend (asegúrate de que los campos coincidan con los de tu frontend)
    id_paciente  = data['id_usuario']  # Este debería ser recuperado de session si ya está logueado
    id_especialista = data['id_especialista']  # Aquí deberías tener el ID del especialista elegido
    fecha_hora = data['fecha_hora']  # Formato de fecha y hora (por ejemplo: '2024-12-24 10:00:00')
    motivo_consulta = data['motivo_consulta']  # Ejemplo: 'Consulta de Emergencia'
    estado = 'pendiente'  # Inicializamos el estado de la cita como 'pendiente'

    # Conexión a la base de datos
    connection = get_db_connection()
    cursor = connection.cursor()

    # Inserta los datos en la tabla 'citas'
    try:
        cursor.execute("""
            INSERT INTO citas (id_paciente , id_especialista, fecha_hora, motivo_consulta, estado)
            VALUES (%s, %s, %s, %s, %s)
        """, (id_paciente , id_especialista, fecha_hora, motivo_consulta, estado))

        # Commit para guardar los cambios en la base de datos
        connection.commit()

        # Devolver una respuesta de éxito con estado 'completada'
        return jsonify({"message": "Cita guardada correctamente", "estado": "completada"}), 200

    except Exception as e:
        print(e)
        return jsonify({"message": "Hubo un error al guardar la cita"}), 500

    finally:
        cursor.close()
        connection.close()

#VER CITAS
@app.route('/get-citas', methods=['GET'])
def get_citas():
    id_especialista = request.args.get('id_especialista')
    if not id_especialista:
        return jsonify({'error': 'Se requiere el ID del especialista para buscar las citas'}), 400
    
    especialista = Usuario.query.get(id_especialista)
 
    if not especialista or especialista.rol != 'especialista':
        return jsonify({'error': 'No se encontró el especialista o no tiene el rol adecuado'}), 404

    citas = Cita.query.filter_by(id_especialista=id_especialista).all()
    if citas:
        citas_list = [{
            "id_cita": cita.id_cita,
            "id_paciente": cita.id_paciente,
            "fecha_hora": cita.fecha_hora.strftime("%Y-%m-%d %H:%M:%S"),
            "motivo_consulta": cita.motivo_consulta,
            "estado": cita.estado
        } for cita in citas]
        return jsonify({"citas": citas_list}), 200
    else:
        return jsonify({"message": "No hay citas registradas para este especialista."}), 404

@app.route('/delete-cita/<int:id_cita>', methods=['POST'])
def delete_cita(id_cita):
    try:
        # Buscar la cita por id
        cita = Cita.query.get(id_cita)
        print('cita', cita)
        if not cita:
            return jsonify({'error': 'Cita no encontrada'}), 404

        # Eliminar la cita
        db.session.delete(cita)
        db.session.commit()
        return jsonify({'message': f'Cita con id {id_cita} eliminada exitosamente'}), 200
    except Exception as e:
        db.session.rollback()  # Deshacer cualquier cambio en caso de error
        return jsonify({'error': str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)