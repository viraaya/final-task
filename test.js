import { group } from 'k6';
import { check } from 'k6';
import http from 'k6/http';

export let options = {
    vus: 1000,
    iterations: 3500,
    rps: 1000 / 2,
    thresholds: {
        'http_req_duration': ['p(95)<2000'],
    },
};

export default function () {
    group('Create User API Test', function () {
        const createPayload = JSON.stringify({
            name: 'Rachmah Nanda Octhavira',
            job: 'Evermos Software',
        });

        const createParams = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const createRes = http.post('https://reqres.in/api/users', createPayload, createParams);

        check(createRes, {
            'Create User - response code was 201': (res) => res.status == 201,
        });
    });

    group('Update User API Test', function () {
        const updatePayload = JSON.stringify({
            name: 'Rachmah Nanda Octhavira',
            job: 'Evermos Software',
        });

        const updateParams = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const updateRes = http.put('https://reqres.in/api/users/2', updatePayload, updateParams);

        check(updateRes, {
            'Update User - response code was 200': (res) => res.status == 200,
            'Update User - response body is not empty': (res) => res.body.length > 0,
            // Add more checks as needed
        });
    });
}