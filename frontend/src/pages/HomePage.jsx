import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	console.log("products", products);

	return (
		<Container maxW='container.xl' py={12}>
			<VStack spacing={8}>
			<Text
  fontSize={{ base: "24px", md: "30px" }}
  fontWeight="bold"
  bgGradient="linear(to-r, cyan.400, blue.500)"
  bgClip="text"
  textAlign="center"
  position="relative"
  animation="floating 3s ease-in-out infinite"
  textShadow="0px 4px 6px rgba(0, 0, 0, 0.3)"
>
  Current Products 🚀
</Text>

<style>
{`
  @keyframes floating {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`}
</style>


				<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

				{products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
				)}
			</VStack>
		</Container>
	);
};
export default HomePage;
