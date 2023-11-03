import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card overflow="hidden" borderRadius={10}>
        <Skeleton height="200px"/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
