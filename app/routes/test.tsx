import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, json } from "@remix-run/react";
import AudioRecorder from "~/components/recorder";

const token = `TOKEN HERE`;

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  console.log(formData.get("file"));
  const res = await fetch("API URL", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
    redirect: "follow",
  });

  console.log(await res.json());
  return json(res);
}
export default function Index() {
  return (
    <Form>
      <AudioRecorder />
    </Form>
  );
}
