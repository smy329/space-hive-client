import { FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [loginError, setLoginError] = useState('');
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow-2xl shadow-  md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                // value={email}
                // onChange={handleEmail}
                className="theme-input"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                // value={password}
                // onChange={handlePassword}
                placeholder="••••••••"
                className="theme-input"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-amber-300"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button type="submit" className="w-full theme-btn">
              Sign in
            </button>
            <div>
              {/* {loginError && (
                <span className="block text-center text-sm font-medium text-rose-700 animate-pulse">
                  {loginError}
                </span>
              )} */}
            </div>

            <p className="text-sm font-light text-gray-500 ">
              Don&apos;t have an account yet? &nbsp;
              <a
                href="/register"
                className="font-medium text-gray-600 hover:underline"
              >
                Sign up
              </a>
            </p>

            {/* ------------------divider--------------------- */}
            <div className="flex items-center">
              <hr className="border border-gray-200 w-full" />
              <span className="px-2">OR</span>
              <hr className="border border-gray-200 w w-full" />
            </div>
            {/* -------------divider ends------------------------------- */}

            <div className="flex justify-between">
              <button
                className="mb-2 w-100 flex items-center justify-center px-4 py-2 bg-blue-500 rounded-lg text-white"
                // onClick={handleGoogleLogin}
              >
                <FaGoogle /> &nbsp; <span>Login with Google</span>
              </button>
              <button
                className="mb-2 w-100 flex items-center justify-center p-2 px-4 py-2 bg-slate-800 rounded-lg text-white"
                // onClick={handleGithubLogin}
              >
                {' '}
                <FaGithub /> &nbsp; Login with Github
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
