import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
function Demo() {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div>
      <Box maw={340} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <Checkbox
            mt="md"
            label="I agree to sell my privacy"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>

      <Carousel withIndicators height={200}>
        <Carousel.Slide className="bg-blue-300 text-center text-[50px] text-white">
          1
        </Carousel.Slide>
        <Carousel.Slide className="bg-blue-300 text-center text-[50px] text-white">
          2
        </Carousel.Slide>
        <Carousel.Slide className="bg-blue-300 text-center text-[50px] text-white">
          3
        </Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      {/* <input
              type="text"
              className="w-[100%] rounded-3xl h-[40px] p-1 px-5 "
              placeholder="search..."
            />
            <p className="absolute top-0 right-0 h-[30px] flex items-center px-4 bg-white rounded-3xl my-1">
              <FaSearch />
            </p> */}
    </div>
  );
}
export default Demo;
