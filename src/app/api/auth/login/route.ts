import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyUser, signToken } from "@/lib/auth";

const schema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(1, "Password is required."),
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
    const { email, password } = parsed.data;
    const user = await verifyUser(email, password);
    const token = signToken({ id: user.id, email: user.email });
    return NextResponse.json({ user, token });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Something went wrong.";
    return NextResponse.json({ error: message }, { status: 401 });
  }
}
