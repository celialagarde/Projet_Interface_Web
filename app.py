from flask import Flask, request, jsonify


app = Flask(__name__)


@app.route('/validate', methods=['POST'])
def validate():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')


    if not username or not password or not email:
        return jsonify({'success': False, 'message': 'Tous les champs doivent être remplis.'})
    if len(password) < 8:
        return jsonify({'success': False, 'message': 'Le mot de passe doit contenir au moins 8 caractères.'})
    # Autres vérifications possibles
    return jsonify({'success': True})


if __name__ == '__main__':
    app.run(debug=True)
