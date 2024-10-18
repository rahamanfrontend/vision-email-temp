import React from "react";
import {
  Row,
  Column,
  Section,
  Html,
  Head,
  Body,
  Tailwind,
  Button,
  Container,
  Text,
  Font,
  Link,
  Img,
} from "@react-email/components";
import configs from "../configs";

export const Email = ({
  name,
  token,
  otp,
}: {
  name: string;
  token: string;
  otp: string;
}) => {
  return (
    <Tailwind
    // @ts-ignore
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Html>
        <Head>
          <Font
            fontFamily="Lexend"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/lexend/v30/RtKJbxU4oo2bp7zj_qMA.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body className="">
          <Container className="h-20 w-full bg-background md:w-[600px]">
            <Section>
              <div className="flex items-center justify-center pt-[20px] pb-[18px]">
                <Img
                  src={`https://i.ibb.co.com/4Wnp5dZ/Group-1000003195.png`}
                  alt="Cat"
                  width="180px"
                  height="33px"
                  className="mx-auto"
                />
              </div>
            </Section>
            <Section className="py-[24px] px-[45px]">
              <Section className="px-[37.5px] py-[32px] bg-white">
                <Text className="text-info text-[20px] font-semibold ">
                  Please Verify Your Email Address
                </Text>
                <Text className="text-info text-base mt-[16px] mb-[30px] font-normal capitalize">
                  Hi {name}
                </Text>
                <Text className="text-secondary text-base font-normal">
                  Thank you for signing up with VIZFLEET! We just need to verify
                  your email address to complete your registration.
                </Text>

                <Text className="text-info text-[20px] font-semibold flex my-6 ">
                  OTP:{" "}
                  <span className="text-primary ms-1">{otp ?? "N/A"}</span>
                </Text>
                <Text className="text-secondary mb-4 text-base font-normal ">
                  Click the button below to verify your email:
                </Text>
                <Button className=" bg-primary mb-6">
                  <div className=" text-white  flex items-center gap-1 text-base font-medium gap-2 px-6 py-2">
                    <Img
                      src={`https://i.ibb.co.com/PGMTZm8/email-1.pngs`}
                      alt="Cat"
                      className="block mx-auto"
                    />
                    <span
                      className="block text-[16px] -mt-1"
                      style={{
                        marginLeft: "4px",
                      }}
                    >
                      Verify Email
                    </span>
                  </div>
                </Button>
                <Text className="text-secondary mb-4 text-base font-normal ">
                  If the button doesn't work, copy and paste this link into your
                  browser:
                </Text>
                <Link
                  href={`${configs.frontendHost}/verify-otp?token=${token}`}
                  className="text-blue mb-6 text-base font-normal "
                >
                  {`${configs.frontendHost}/verify-otp?token=${token}`}
                </Link>
                <Text className="text-secondary mb-2 text-base font-normal ">
                  Best regards
                </Text>
                <Text className="text-secondary mb text-base font-normal ">
                  Visions Transport Enterprise Sdn Bhd
                  <br />
                  <span className="!text-secondary">
                    www.vizfleettransport.com
                  </span>
                </Text>
              </Section>
            </Section>
            <div style={footerContainer}>
              <div style={imageMakeCenter}>
                <Img
                  src={`https://i.ibb.co.com/X8DkGbG/Vector.png`}
                  alt="Cat"
                  className="block"
                />
                <Img
                  src={`https://i.ibb.co.com/2cGmJf1/Facebook.png`}
                  alt="Cat"
                  style={{
                    marginLeft: "32px",
                  }}
                />
                <Img
                  src={`https://i.ibb.co.com/F3jRK9z/Instagram.png`}
                  alt="Cat"
                  style={{
                    marginLeft: "32px",
                  }}
                />
              </div>
              <div style={flexColumnCenter}>
                <Link
                  href="www.visionstransport.com"
                  className="text-supportivePrimary  mx-auto underline border-b border-supportivePrimary text-sm mb-4"
                  style={{
                    textAlign: "center",
                  }}
                >
                  www.visionstransport.com
                </Link>
              </div>
              <div style={flexColumnCenter}>
                <Img
                  src={`https://i.ibb.co.com/4Wnp5dZ/Group-1000003195.png`}
                  alt="Cat"
                  width="180px"
                  height="33px"
                  className="block mx-auto"
                />
              </div>
            </div>
            <Section className="h-[14px] bg-primary w-full"></Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

const imageMakeCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 32,
  margin: "0px auto",
  marginBottom: "16px",
  width: "135px",
};

const flexColumnCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const footerContainer = {
  padding: "20px",
  background: "#fff",
};
