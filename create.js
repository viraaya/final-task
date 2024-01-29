import http from 'k6/http';
import { check } from "k6";

export default function () {
    const payload = JSON.stringify({
        name : 'Rachmah Nanda Octhavira',
        job: 'Evermos Software',
    });

const params = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const res = http.post('https://reqres.in/api/users', payload, params);

check(res,
    {
        'response code was 201': (res) => res.status == 201,
    },
    );
}