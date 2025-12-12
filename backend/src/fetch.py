from requests import post, Response
from typing import Any
from json import dumps
from settings import SECRET_KEY


def fetch_element() -> dict[str, Any]:
    payload: dict[str, Any] = {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": SECRET_KEY,
            "n": 1,
            "min": 1,
            "max": 118,
            "replacement": True
        },
        'id': 1
    }
    headers: dict[str, str] = {'Content-type': 'application/json'}
    response: Response = post(
        url='https://api.random.org/json-rpc/2/invoke',
        data=dumps(payload),
        headers=headers
    )

    data = response.json()
    if response.status_code != 200:
        return {
            'error': response.status_code,
            'element': 0
        }

    result: int = data['result']['random']['data'][0]
    return {
        'element': result
    }
