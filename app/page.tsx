"use client";
import tw, { styled } from "twin.macro";

const Layout = styled.div`
  ${tw`antialiased text-white w-full h-svh flex place-content-center items-center bg-black flex-col gap-2`}
`;

const Title = styled.h1`
  ${tw`text-2xl font-semibold`}
`;

const Subtitle = styled.p`
  ${tw`text-lg`}
`;

export default function Home() {
  return (
    <Layout>
      <Title>Next.js Starter</Title>
      <Subtitle>
        Built with Next.js, Tailwind CSS, twin.macro and Styled Components
      </Subtitle>
    </Layout>
  );
}
