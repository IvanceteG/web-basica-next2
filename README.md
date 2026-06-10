# web-basica-next

Projecte web bàsic construït amb **Next.js 16**, **Tailwind CSS**, **Prisma** i **Auth.js v5**. Inclou un blog públic i un backoffice protegit per rol.

## Tecnologies

- [Next.js 16](https://nextjs.org) — App Router + Turbopack
- [Tailwind CSS v4](https://tailwindcss.com)
- [Prisma 7](https://www.prisma.io) — ORM amb PostgreSQL
- [Auth.js v5 (next-auth@beta)](https://authjs.dev) — autenticació per credencials amb JWT
- [Neon](https://neon.tech) — PostgreSQL serverless (producció)
- [Vercel](https://vercel.com) — desplegament

## Estructura

```
src/
├── app/
│   ├── (site)/          # Pàgines públiques (inici, blog, contacte, login)
│   ├── (dashboard)/     # Tauler d'usuari autenticat
│   ├── admin/           # Backoffice (ADMIN / EDITOR)
│   └── api/             # Endpoints REST (auth + admin posts)
├── lib/
│   ├── auth.js          # Configuració Auth.js
│   ├── api-auth.js      # Helper de protecció per APIs
│   └── prisma.js        # Client Prisma singleton
└── proxy.js             # Middleware de protecció de rutes
```

## Posada en marxa local

### Requisits

- Node.js `>=22.12`
- Docker Desktop (per la BD local) o compte a [Neon](https://neon.tech)

### 1. Instal·la dependències

```bash
npm install
```

### 2. Configura les variables d'entorn

Copia `.env.example` a `.env` i omple els valors:

```bash
cp .env.example .env
```

```dotenv
DATABASE_URL="postgresql://blog:blogsecret@localhost:5432/blogdb?schema=public"
AUTH_SECRET="el-teu-secret-aqui"
```

> Per generar un secret: `openssl rand -hex 32`

### 3. Arrenca la base de dades (Docker)

```bash
docker-compose up -d
```

### 4. Aplica l'esquema a la BD

```bash
npx prisma db push
```

### 5. Arrenca el servidor de desenvolupament

```bash
npm run dev
```

Obri [http://localhost:3000](http://localhost:3000).

## Desplegament a Vercel

1. Importa el repositori a [Vercel](https://vercel.com)
2. Afegeix les variables d'entorn al projecte:
   - `DATABASE_URL` — URL de connexió a Neon (o altra BD PostgreSQL)
   - `AUTH_SECRET` — secret per signar els tokens JWT
3. Desplega — el `postinstall` genera el client Prisma automàticament

## Rols d'usuari

| Rol | Accés |
|-----|-------|
| `ADMIN` | Backoffice complet |
| `EDITOR` | Backoffice complet |
| — | Només pàgines públiques |
