const mockData = 
{
    "pacientes" : [
        {
            "id": 1,
            "cpf": "32876394822",
            "name": "Alberto Junior",
            "celular": "11922334455",
            "telefone": "11922234567",
            "email": "alberto@example.com",
            "tipo_sangue": "AB+",
            "id_endereco": 22

        },
        {
            "id": 2,
            "cpf": "66876394822",
            "name": "Lisa Junior",
            "celular": "11922334455",
            "telefone": "11922234567",
            "email": "lisa@example.com",
            "tipo_sangue": "AB+",
            "id_endereco": 22

        },
        {
            "id": 3,
            "cpf": "11876394822",
            "name": "Bartolomeu Junior",
            "celular": "11922334455",
            "telefone": "11922234567",
            "email": "bart@example.com",
            "tipo_sangue": "AB+",
            "id_endereco": 22

        },
        {
            "id": 4,
            "cpf": "22876394822",
            "name": "Matilde Maria",
            "celular": "11922334455",
            "telefone": "11922234567",
            "email": "margaret@example.com",
            "tipo_sangue": "OA-",
            "id_endereco": 12

        },
        {
            "id": 5,
            "cpf": "21876394822",
            "name": "Claudio Albuquerque",
            "celular": "11922334455",
            "telefone": "11924234569",
            "email": "claudio.tudocerto@example.com",
            "tipo_sangue": "AB-",
            "id_endereco": 2

        },
        {
            "id": 6,
            "cpf": "11876311822",
            "name": "Atila Amaral",
            "celular": "11922334455",
            "telefone": "11958734567",
            "email": "medavacina@example.com",
            "tipo_sangue": "OB-",
            "id_endereco": 5

        },
        {
            "id": 7,
            "cpf": "54876394822",
            "name": "Hipatia Sophia",
            "celular": "11922334455",
            "telefone": "12911234567",
            "email": "twoplustwo@example.com",
            "tipo_sangue": "OA-",
            "id_endereco": 9

        }
    ],
    "especialistas" : [
        {
            "id": 1,
            "registro": "194528-SP",
            "name": "Aarao Andrade Napoleao Lima",
            "celular": "11922334455",
            "telefone": "11922234567",
            "email": "araoo@example.com",
            "id_endereco": 21

        },
        {
            "id": 2,
            "registro": "39558-MG",
            "name": "Abdalla Campos Felicio",
            "celular": "11922334455",
            "telefone": "11922234567",
            "email": "bdalla@example.com",
            "id_endereco": 9

        },
        {
            "id": 3,
            "registro": "235072-RJ",
            "name": "Abdo Miguel Kather Filho",
            "celular": "11922334455",
            "telefone": "11922234567",
            "email": "amiguel@example.com",
            "id_endereco": 10

        },
        {
            "id": 4,
            "registro": "180968-SP",
            "name": "Abigail Ballone",
            "celular": "11911334455",
            "telefone": "11532234567",
            "email": "abigail@example.com",
            "id_endereco": 15

        },
        {
            "id": 5,
            "registro": "20621-SP",
            "name": "Flavio Matias",
            "celular": "11922334455",
            "telefone": "11922234567",
            "email": "alberto@example.com",
            "id_endereco": 22

        },
        {
            "id": 6,
            "registro": "86221-MG",
            "name": "Aaron Paulo Tavares Delladona",
            "celular": "11911772222",
            "telefone": "11922234567",
            "email": "aaron@example.com",
            "id_endereco": 31

        },
        
    ],
    "especialidades" : [
        {
            "id": 1,
            "nome": "dermatologia"

        },
        {
            "id": 2,
            "nome": "infectologia"

        },
        {
            "id": 3,
            "nome": "ortopedia"

        },
        {
            "id": 4,
            "nome": "otorrinolaringologia"

        },
        {
            "id": 5,
            "nome": "pediatria"

        }
    ],
    "agendamento" : [
        {
            "id": 1,
            "especialista": "Abigail Ballone",
            "paciente": "Matilde Maria",
            "data": "2021-06-18",
            "horario": "10:20",

        },
        {
            "id": 2,
            "especialista": "Aaron Paulo Tavares Delladona",
            "paciente": "Atila Amaral",
            "data": "2021-06-18",
            "horario": "13:40",

        },
        {
            "id": 3,
            "especialista": "Flavio Matias",
            "paciente": "Matilde Maria",
            "data": "2021-06-19",
            "horario": "14:00",

        },
        {
            "id": 4,
            "especialista": "Abdalla Campos Felicio",
            "paciente": "Matilde Maria",
            "data": "2021-06-22",
            "horario": "12:20",

        },
        {
            "id": 5,
            "especialista": "Abigail Ballone",
            "paciente": "Lisa Junior",
            "data": "2021-06-18",
            "horario": "10:20",

        },
        {
            "id": 6,
            "especialista": "Abigail Ballone",
            "paciente": "Lisa Junior",
            "data": "2021-07-16",
            "horario": "10:20",

        }
    ]
}

export default mockData