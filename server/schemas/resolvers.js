const { User, Item, Bundle } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
    },
    users: async (parent, args) => {
      const usersData = await User.find().select("-__v -password");

      return usersData;
    },
    user: async (parent, args) => {
      const userData = await User.findOne({ _id: args._id }).select(
        "-__v -password"
      );

      return userData;
    },
    items: async (parent, args) => {
      const usersData = await Item.find();

      return usersData;
    },
    bundles: async (parent, args) => {
      const bundlesData = await Bundle.find();

      return bundlesData;
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addItem: async (parent, { _id, donatedItems }) => {
      const userData = await User.findByIdAndUpdate(
        { _id: _id },
        { $addToSet: { donatedItems: donatedItems } },
        { new: true }
      );

      return userData;
    },

    removeItem: async (parent, { _id, donatedItems }) => {
      const userData = await User.findByIdAndUpdate(
        { _id: _id },
        { $pull: { donatedItems: donatedItems } },
        { new: true }
      );

      return userData;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
