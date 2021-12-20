import mongoose from 'mongoose';
import User from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import Cookies from 'cookies';

const userController = {};

const setCookies = (userID, username, salt, cookies) => {
  const ONE_HOUR = 60 * 60 * 1000;
  const sessionID = bcrypt.hashSync(`${Date.now()}`, salt);

  cookies.set('session', sessionID, {
    httpsOnly: true,
    maxAge: ONE_HOUR,
  });
  cookies.set('ssid', `${userID}`, { httpOnly: true });
  cookies.set('username', `${username}`, { httpOnly: true });
};

userController.createUser = async (req, res) => {
  let hashedPassword;
  const { username, password } = req.body;
  const SALT_WORK_FACTOR = 10;

  hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);
  User.create(
    { username: username, password: hashedPassword },
    (error, user) => {
      if (error) {
        console.log(error);
        return res.status(400).json({
          errorMessage:
            'Error has occurred during user creation. Please enter a unique username and try again.',
        });
      } else {
        const cookies = new Cookies(req, res);
        setCookies(user._id, username, SALT_WORK_FACTOR, cookies);
        return res.status(200).json({
          username: user.username,
          wallet: user.wallet,
          admin: user.isAdmin,
        });
      }
    }
  );
};

userController.userLogin = async (req, res) => {
  const { username, password } = req.body;
  const SALT_WORK_FACTOR = 10;

  User.findOne({ username }, (error, user) => {
    if (error) {
      console.log(error);
      return res
        .status(400)
        .json({ errorMessage: 'error has occurred during user login' });
    } else if (!user) {
      return res.status(400).json({
        errorMessage: 'Incorrect username or password. Please try again.',
      });
    } else {
      const hashedPassword = user.password;
      const validatePassword = bcrypt.compareSync(password, hashedPassword);
      if (!validatePassword) {
        return res.status(400).json({
          errorMessage: 'Incorrect username or password. Please try again.',
        });
      }

      const cookies = new Cookies(req, res);
      setCookies(user._id, user.username, SALT_WORK_FACTOR, cookies);
      return res.status(200).json({
        username: user.username,
        wallet: user.wallet,
        admin: user.isAdmin,
      });
    }
  });
};

export default userController;
