import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

// debounce -> Faz com que a busca seja feita após o usuário terminar de digitar

// ControllerComponent => permite controlar o estado do componente para
// const [search, setSearch] = useState('');
// dentro do input inserir 
// value={search}
// onChange={() => setSearch(event.target.value)}

// Uncontrolled the search input - Imperativa vs Declativa 
// searchInputRef.current.focus() (Imperativo) 
// 
// 

interface SearchBoxProps {
  showSearchBox?: boolean;
}

export function SearchBox({ showSearchBox }: SearchBoxProps) {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
  <>
    {showSearchBox && (
      <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        ref={searchInputRef}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
    )}
  </>
  );
}
