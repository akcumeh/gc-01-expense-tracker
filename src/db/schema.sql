create table gc01_users (
    id uuid primary key default uuid_generate_v4(),
    name text not null,
    username text,
    email text unique not null,
    passphrase text not null,
    created_at timestamptz default now()
);

create table gc01_entries (
    id uuid primary key default uuid_generate_v4(),
    creator_id uuid not null references gc01_users(id),
    category text not null default 'expense' check (category in ('expense', 'income')),
    title text,
    description text,
    amount numeric(12, 2) not null,
    currency text,
    created_at timestamptz default now()
);

