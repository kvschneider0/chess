import datetime
import faker

fake = faker.Faker()

start_date = datetime.date(2005, 1, 1)
end_date = datetime.date(2015, 12, 31)

user_dicts = [
    {
        'id': 0,
        'full_name': 'Guest',
        'username': 'Guest',
        'email': 'guest@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/default.png?raw=true',
        'date_joined': datetime.date(2020, 11, 23),
        'password_hash': 'password'
    },
    {
        'id': 1,
        'full_name': 'Kyle Schneider',
        'username': 'Kye_Schnei',
        'email': 'kyle@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/woody.jpg?raw=true',
        'date_joined': datetime.date(2020, 11, 23),
        'password_hash': 'password'
    },
    {
        'id': 2,
        'full_name': 'Topher Ludlow',
        'username': 'topherLud',
        'email': 'topher@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/topher.jpg?raw=true',
        'date_joined': datetime.date(2020, 11, 10),
        'password_hash': 'password'
    },
    {
        'id': 3,
        'full_name': 'Terrence Chung',
        'username': 'twocupterry',
        'email': 'terrence@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/terrence.JPG?raw=true',
        'date_joined': datetime.date(2016, 4, 4),
        'password_hash': 'password'
    },
    {
        'id': 4,
        'full_name': 'Magnus Carlsen',
        'username': 'DrDrunkenstein',
        'email': 'magnus@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/magnus.jpg?raw=true',
        'date_joined': fake.date_between(start_date=start_date, end_date=end_date),
        'password_hash': 'password'
    },
    {
        'id': 5,
        'full_name': 'Garry Kasparov',
        'username': 'KasparovKingKiller',
        'email': 'garry@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/garry.jpg?raw=true',
        'date_joined': fake.date_between(start_date=start_date, end_date=end_date),
        'password_hash': 'password'
    },
    {
        'id': 6,
        'full_name': 'Hikaru Nakamura',
        'username': 'Hikaru',
        'email': 'hikaru@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/hikaru.png?raw=true',
        'date_joined': fake.date_between(start_date=start_date, end_date=end_date),
        'password_hash': 'password'
    },
    {
        'id': 7,
        'full_name': 'Fabiano Caruana',
        'username': 'FabulousFabiano',
        'email': 'fabiano@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/fabiano.png?raw=true',
        'date_joined': fake.date_between(start_date=start_date, end_date=end_date),
        'password_hash': 'password'
    },
    {
        'id': 8,
        'full_name': 'Maxime Vachier-Lagrave',
        'username': 'MVLchess',
        'email': 'maxime@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/maxime.jpg?raw=true',
        'date_joined': fake.date_between(start_date=start_date, end_date=end_date),
        'password_hash': 'password'
    },
    {
        'id': 9,
        'full_name': 'Wesley So',
        'username': 'SoSneaky',
        'email': 'wesley@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/wesley.png?raw=true',
        'date_joined': fake.date_between(start_date=start_date, end_date=end_date),
        'password_hash': 'password'
    },
    {
        'id': 10,
        'full_name': 'Viswanathan Anand',
        'username': 'Vishy',
        'email': 'vishy@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/viswanathan.jpg?raw=true',
        'date_joined': fake.date_between(start_date=start_date, end_date=end_date),
        'password_hash': 'password'
    },
    {
        'id': 11,
        'full_name': 'Levon Aronian',
        'username': 'The Levonator',
        'email': 'levon@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/levon.jpg?raw=true',
        'date_joined': fake.date_between(start_date=start_date, end_date=end_date),
        'password_hash': 'password'
    },
    {
        'id': 12,
        'full_name': 'Anish Giri',
        'username': 'GiriGiri',
        'email': 'anish@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/anish.jpg?raw=true',
        'date_joined': fake.date_between(start_date=start_date, end_date=end_date),
        'password_hash': 'password'
    },
    {
        'id': 13,
        'full_name': 'Ian Nepomniachtchi',
        'username': 'Nepo',
        'email': 'ian@fake.com',
        'profile_image': 'https://github.com/kschneider0/chess/blob/main/server/assets/ian.jpeg?raw=true',
        'date_joined': fake.date_between(start_date=start_date, end_date=end_date),
        'password_hash': 'password'
    }
]