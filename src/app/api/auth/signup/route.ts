import { NextResponse } from "next/server";
import { z } from "zod";
import { createUser, signToken } from "@/lib/auth";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }
    const { name, email, password } = parsed.data;
    const user = await createUser(name, email, password);
    const token = signToken({ id: user.id, email: user.email });
    return NextResponse.json({ user, token }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Something went wrong.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
