function feed(parent, args, context, info) {
    return context.prisma.link.findMany()
  }

const info = () => `This is the API of a Hackernews Clone`;

  module.exports = {
    feed,
    info,
  }
