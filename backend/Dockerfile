FROM python:3.13-alpine

WORKDIR /backend
COPY . .

RUN pip install -r ./requirements.txt
ENTRYPOINT [ "python3", "./src/main.py" ]