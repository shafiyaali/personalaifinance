# Personal Finance Management

## Overview
    A full-stack personal finance management application built with Next.js, React, TypeScript, PostgreSQL, Prisma and Docker.

    The project focuses not only on UI development, but also on application architecture, validation, authorization, database design, DTO boundaries, pagination, filtering and production-oriented data handling.

## Features
    User authentication and authorization
    Transaction CRUD
    Category CRUD
    Income and expense management
    Transaction filtering
    Server-side pagination
    Transaction/category relationships
    Form validation with Zod
    React Hook Form integration
    DTO-based server-to-client data transformation
    Prisma Decimal serialization
    Responsive dashboard
    Financial summary and transaction visualizations
    PostgreSQL database
    Dockerized PostgreSQL development environment
    Protected application routes
    Reusable UI components with Shadcn/Base UI
## Architecture

    UI
    ↓
    Server Actions
    ↓
    Service
    ↓
    Repository
    ↓
    PostgreSQL

## Tech Stack
    Frontend
    Next.js
    React
    TypeScript
    React Hook Form
    Zod
    Shadcn/Base UI
    Tailwind CSS
    Recharts
    Backend
    Next.js Server Actions
    Service layer
    Repository layer
    Prisma ORM
    Database
    PostgreSQL
    Docker
    Engineering
    TypeScript
    Git/GitHub
    Layered architecture
    DTO pattern
    Server-side validation
    Pagination
    Filtering
    Error handling
## Authentication
    used BetterAuth for authentication and session management

## Filtering & Pagination
    Transactions support server-side pagination and filtering.
    Pagination uses 
        page and pageSize
    Filtering can be applied By
        transaction type
        category
        search Text
## Dashboard

## DTO / Data Transformation

## Docker Development Setup

## Database
    PostgreSQL runs inside Docker during development.

    This keeps the development database environment reproducible rather than depending on a local PostgreSQL installation.

## Project Goals
    This project was built as a practical full-stack engineering project to demonstrate:

        Clean separation of concerns
        Type-safe development
        Database-backed application design
        Authentication and authorization
        Reusable frontend architecture
        Server-side pagination and filtering
        Production-oriented data serialization
        Maintainable code structure
## Local Setup

## Environment Variables

## Screenshots
    coming soon
## Live Demo
    https://personalaifinance.vercel.app/
