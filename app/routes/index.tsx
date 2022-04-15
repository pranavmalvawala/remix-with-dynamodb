import { Form } from "@remix-run/react";
import styles from "styles/index.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function action({ request }) {
  const form = await request.formData();
  const firstName = form.get("firstName");
  const lastName = form.get("lastName")

  return null;
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-center">Welcome to Remix</h1>
      <div className="main-container">
        <ul>
          <li>Naruto Uzumaki</li>
        </ul>
        <Form method="post">
          <input name="firstName" placeholder="first name" className="block m" />
          <input name="lastName" placeholder="last name" className="block m" />
          <button type="submit" className="m">Add</button>
        </Form>
      </div>
    </div>
  );
}
