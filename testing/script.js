import http from 'k6/http';
import { sleep } from 'k6';
import { Counter } from 'k6/metrics';
import { check } from 'k6';

export const reqCount = new Counter('https_reqs');

export const options = {
  vus: 1,
  duration: '100s'
}
const endpoint = Math.floor(Math.random() * (50 - (Math.floor(50 * .90) + 1)) + (Math.floor(50 * .90)))

export default function () {
  const res = http.get(`http://localhost:3000/reviews/?product_id=${endpoint}`)
  sleep(1);
  check(res, {
    'status is 200' : (r) => r.status === 200,
    'timing is < 2000ms' : (r) => r.timings.duration < 2000,
  });
}