---
title: "ARTEMIS"
headline: "Wildlife Protection Information System on Google Cloud"
tag: "Cloud Computing"
cover: ../../assets/projects/artemis/cover.png
client: "Cloud Computing Course"
category: "Cloud & Full-Stack Web"
date: 2025-06-02
techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "Google Cloud", "Cloud SQL", "Cloud Storage", "Docker", "Nginx", "GitHub Actions"]
summary: "A web application for educating the public about Indonesia's protected and endangered wildlife and for reporting illegal acts such as poaching and wildlife trade. Built for the Cloud Computing course, it runs on Google Cloud Platform with the frontend and backend on separate virtual machines, a managed Cloud SQL database, Cloud Storage for photos, and an automated GitHub Actions CI/CD pipeline."
order: 3
---
## Project Overview

ARTEMIS is a wildlife protection information system that helps the public learn about Indonesia's protected animals and report illegal activities against wildlife and their ecosystems. Visitors can browse a wildlife catalog with each animal's name, Latin name, description, protection status, region, population, and photo, read articles, find donation information, and submit reports of incidents such as poaching or wildlife trade, complete with location, description, and photo evidence. Administrators log in to a dashboard showing statistics such as the number of animals and incoming reports, manage the wildlife data including photos, and review reports submitted by the public.

## Cloud Architecture

The application is deployed on Google Cloud Platform with a design that separates each layer for security:

- **Frontend VM**: static HTML, CSS, and JavaScript served by Nginx in a Docker container
- **Backend VM**: a REST API built with Node.js and Express in its own Docker container, running on a separate virtual machine so the server logic and credentials are never exposed on the public-facing frontend
- **Cloud SQL (PostgreSQL)**: a managed database storing wildlife data, public reports, and admin accounts
- **Cloud Storage**: stores wildlife photos and report evidence, accessed by the backend through a service account

Admin sessions are handled with express-session, passwords are hashed with bcrypt, and file uploads go through Multer before being stored in Cloud Storage.

## CI/CD Pipeline

Deployment is fully automated with GitHub Actions. Every change pushed from my local machine to GitHub triggers a pipeline that builds the Docker images and deploys the frontend and backend to their respective virtual machines, so the live application is always in sync with the latest code without manual server work.

## What I Learned

This project taught me how to design and deploy a web application on the cloud end to end, from separating services across virtual machines and using managed database and storage services to securing credentials with service accounts and automating releases with a CI/CD pipeline.
