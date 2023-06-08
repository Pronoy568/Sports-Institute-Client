import React, { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import img from "../../../assets/authentication/login.jpg";
import Google from "../Google/Google";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login SuccessFully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="hero min-h-screen bg-stone-50">
        <div className="hero-content flex-col md:flex-row">
          <div className="md:w-1/2 w-4/5 md:mr-12">
            <img className="rounded-3xl" src={img} alt="image" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                  })}
                />
                <p
                  className="relative -top-8 md:left-72 left-44 text-gray-400"
                  checked={showPassword}
                  onClick={handleToggle}
                >
                  {showPassword ? (
                    <>
                      {" "}
                      <FaEyeSlash />{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <FaEye />{" "}
                    </>
                  )}
                </p>
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
              </div>
              {error && <p className="text-red-600">{error}</p>}
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-right px-4 mr-5 -mt-5">
              <small>
                New Here ?{" "}
                <Link className="text-blue-700" to="/register">
                  {" "}
                  Create an account
                </Link>
              </small>
            </p>
            <Google />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
