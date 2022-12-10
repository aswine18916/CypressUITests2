FROM cypress/included:9.7.0

RUN mkdir /BynderTestUI

COPY . /BynderTestUI

RUN yarn install