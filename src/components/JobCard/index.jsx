import React from 'react';
import {
  FiMoreVertical,
  FiStar,
  FiDollarSign,
  FiMapPin,
  FiBox
} from 'react-icons/fi';
import { Flex, Icon, Text } from '@chakra-ui/react';

const JobCard = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      padding="1.5rem"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Flex alignItems="center">
        <Text fontWeight="bold" flex="1">
          Nome da vaga
        </Text>
        <Icon as={FiMoreVertical} color="gray.500" />
      </Flex>
      <Flex marginY="0.5rem">
        <Text color="gray.500" noOfLines={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pulvinar urna id lectus luctus porttitor. Sed sit amet magna risus.
          Donec rhoncus orci lectus, tincidunt laoreet eros ultrices ac. Donec
          euismod eget arcu vel pellentesque. Interdum et malesuada fames ac.
        </Text>
      </Flex>
      <Flex alignItems="center">
        <Icon as={FiStar} color="gray.500" marginRight="0.5rem" />
        <Text color="gray.500" noOfLines={1}>
          3.9
        </Text>
        <Text color="gray.300" marginX="0.5rem" fontWeight="bold">
          ·
        </Text>
        <Icon as={FiBox} color="gray.500" marginRight="0.5rem" />
        <Text color="gray.500" noOfLines={1}>
          CELPE
        </Text>
        <Text color="gray.300" marginX="0.5rem" fontWeight="bold">
          ·
        </Text>
        <Icon as={FiMapPin} color="gray.500" marginRight="0.5rem" />
        <Text color="gray.500" noOfLines={1}>
          Jaboatão dos Guararapes
        </Text>
        <Text color="gray.300" marginX="0.5rem" fontWeight="bold">
          ·
        </Text>
        <Icon as={FiDollarSign} color="gray.500" marginRight="0.5rem" />
        <Text color="gray.500" noOfLines={1}>
          A combinar
        </Text>
      </Flex>
    </Flex>
  );
};

export default JobCard;
