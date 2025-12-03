FROM python:3.13-alpine

WORKDIR /backend
COPY . .

# Temporary port until we set up a proxy
EXPOSE 3000

RUN pip install -r ./spec/requirements.txt
ENTRYPOINT [ "python3", "./src/main.py" ]