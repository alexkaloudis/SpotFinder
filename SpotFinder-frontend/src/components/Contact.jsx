import {Textarea,
        Card,
        Input,
        Button,
        Typography,
  } from "@material-tailwind/react";

const Contact = () => {

        return (
           <Card className="flex flex-col justify-center items-center" color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Contact form
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your name and email to contact me.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="John Smith"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Message
                </Typography>
                <Textarea
                  size="lg"
                  placeholder="message"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Button className="mt-6" fullWidth>
                Submit
              </Button>
            </form>
          </Card>
        );
}

export default Contact;