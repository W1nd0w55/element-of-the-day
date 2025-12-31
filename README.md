# element-of-the-day
Chemical element of the day, right at your fingertips! (don't ask me why you need this)

[![Test & Lint](https://github.com/W1nd0w55/element-of-the-day/actions/workflows/test-lint.yml/badge.svg)](https://github.com/W1nd0w55/element-of-the-day/actions/workflows/test-lint.yml)

![Screenshot](https://gcdnb.pbrd.co/images/bfB8KZksgEOU.png?o=1)

# How to run
Just `docker-compose up`. No setup required.

# Production
## I'm broke, so here's how to run this on a VPS:
1. Write a Docker Compose file with `ghcr.io/W1nd0w55/element-of-the-day-frontend:latest` and `ghcr.io/W1nd0w55/element-of-the-day-backend:latest`
2. Add a reverse proxy. Please.
3. Use Docker Stack or whatever with GitHub Actions to automatically redeploy this (trust me, I'm way too lazy for this)
