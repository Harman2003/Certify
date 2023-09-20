from flask import Flask, request, jsonify
from PIL import Image, ImageDraw, ImageFont
import os
import firebase_admin
from firebase_admin import credentials, storage

app = Flask(__name__)

cred = credentials.Certificate("./generator-66e6b-firebase-adminsdk-ucxoa-f07955da8e.json")
firebase_admin.initialize_app(cred, {
    'storageBucket': 'generator-66e6b.appspot.com'
})
bucket = storage.bucket()

def generate_certificate(certificate_id, user_name, event_name, organization_name, organization_id, expiry_date):
    template_path = "./Acamedic-Achievement-tempate-p2adif7uymj5vx15nb5c0isw92a5epu13ix5kmldeq.png"
    certificate = Image.open(template_path)
    draw = ImageDraw.Draw(certificate)

    font_size_large = 60
    font_size_small = 40
    font_large = ImageFont.load_default()
    font_small = ImageFont.load_default()
    text_color = (0, 0, 0) 

    title_pos = (100, 20)
    test_pos = (40, 40)

    title = "Certificate of Achievement"
    text = f"Certificate ID: {certificate_id}\n\n\n" \
                      f"Recipient: {user_name}\n\n" \
                      f"Event: {event_name}\n\n" \
                      f"Organization: {organization_name} (ID: {organization_id})\n\n" \
                      f"Expiry Date: {expiry_date}"

    border_color = (0, 0, 0)
    border_width = 10
    certificate_border = [(0, 0), (certificate.width - 1, certificate.height - 1)]
    draw.rectangle(certificate_border, outline=border_color, width=border_width)

    background_color = (255, 255, 255)
    certificate_background = [(border_width, border_width), (certificate.width - 1 - border_width, certificate.height - 1 - border_width)]
    draw.rectangle(certificate_background, fill=background_color)

    draw.text(title_pos, title, fill=text_color, font=font_large)
    draw.text(test_pos, text, fill=text_color, font=font_small)

    return certificate

@app.route('/generate_certificate', methods=['POST'])
def generate_certificate_api():
    data = request.get_json()
    data = data.get('newCor',{})
    certificate_id = data.get('certificateId', '')
    user_name = data.get('userName', '')
    event_name = data.get('eventName', '')
    organization_name = data.get('organisationName', '')
    organization_id = data.get('organisationId', '')
    expiry_date = data.get('expiryDate', '')

    certificate = generate_certificate(certificate_id, user_name, event_name, organization_name, organization_id, expiry_date)

    temp_image_path = 'temp_certificate.png'
    certificate.save(temp_image_path)

    blob = bucket.blob(f'certificates/{certificate_id}.png')
    blob.upload_from_filename(temp_image_path)

    certificate_url = blob.public_url

    response_data = {'certificate_url': certificate_url}
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
