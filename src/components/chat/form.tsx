"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  message: z
    .string()
    .min(3, "Message must be at least 3 characters")
    .max(200, "Too long!"),
});

import { useEffect } from "react";

export default function ChatForm({
  onSubmit,
}: {
  onSubmit: (value: string) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  useEffect(() => {
    form.reset({ message: "" });
  }, [form]);

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values.message);
    form.reset();
    form.clearErrors();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Ask me anything"
                  {...field}
                  rows={3}
                  className="resize-none gradient-border focus-visible:ring-0 focus-visible:ring-offset-0 border-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      form.handleSubmit(handleSubmit)();
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"outline"} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
