import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
};

// In-memory store. Swap for a database in production.
const users = new Map<string, User>();

const JWT_SECRET = process.env.JWT_SECRET || "mkfoodmonk-dev-secret-change-me";

export async function createUser(name: string, email: string, password: string) {
  const key = email.toLowerCase();
  if (users.has(key)) {
    throw new Error("An account with this email already exists.");
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const user: User = {
    id: crypto.randomUUID(),
    name,
    email: key,
    passwordHash,
  };
  users.set(key, user);
  return publicUser(user);
}

export async function verifyUser(email: string, password: string) {
  const user = users.get(email.toLowerCase());
  if (!user) throw new Error("Invalid email or password.");
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) throw new Error("Invalid email or password.");
  return publicUser(user);
}

export function signToken(payload: { id: string; email: string }) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function publicUser(user: User) {
  return { id: user.id, name: user.name, email: user.email };
}
