import type { StoryObj } from "@storybook/react";
import TopNavbar from "@/components/navbar/topNavbar";
import NavbarLogo from "@/components/navbar/navLogo";
import NavbarItems from "@/components/navbar/navItems";
import NavbarSettings from "@/components/navbar/navSettings";

const meta = {
  title: "TopNavbar",
  component: TopNavbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo = () => {
  return <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Freact-icon-2048x1793-eq4a5voh.png&tbnid=p_A4J4gle8dtNM&vet=12ahUKEwjKlITTkoKEAxUHe2wGHV04DEUQMygCegQIARBT..i&imgrefurl=https%3A%2F%2Ficonduck.com%2Ficons%2F21299%2Freact&docid=_fQdjaeQHJ5adM&w=2048&h=1793&q=react%20logo%20icon&ved=2ahUKEwjKlITTkoKEAxUHe2wGHV04DEUQMygCegQIARBT" alt="Logo" />
}

export const TopNavbarStory: Story = {
  render: () => (
    <TopNavbar>
      <>
        <NavbarLogo brandName="React" logo={<Logo/>}></NavbarLogo>
        <NavbarItems>
          {["Home", "About", "Contact Us"].map((value) => <p>{value}</p>)}
        </NavbarItems>
        <NavbarSettings><p>Login</p></NavbarSettings>
      </>
    </TopNavbar>
  ),
};