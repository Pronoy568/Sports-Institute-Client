import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import img from "../../../assets/authentication/register.jpg";
import Google from "../Google/Google";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [match, setMatch] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      console.log("Passwords match");
      setMatch("");
    } else {
      setMatch("Passwords do not match");
      return;
    }
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        title: "SignUp SuccessFully",
        position: "center",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          reset();
          navigate("/");
          // const saveUser = { name: data.name, email: data.email };
          // fetch(`http://localhost:4000/users`, {
          //   method: "POST",
          //   headers: {
          //     "content-type": "application/json",
          //   },
          //   body: JSON.stringify(saveUser),
          // })
          //   .then((res) => res.json())
          //   .then((data) => {
          //     if (data.insertedId) {
          //       reset();
          //       Swal.fire({
          //         title: "Updated SuccessFully",
          //         position: "center",
          //         showConfirmButton: false,
          //         timer: 3000,
          //       });
          //       navigate("/");
          //     }
          //   });
        })
        .catch((err) => console.log(err));
    });
  };

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className="hero min-h-screen bg-slate-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2 w-4/5 md:mr-12">
            <img src={img} alt="image" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>

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
                {errors.name && (
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
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
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
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one upper case, one lower case and one
                    special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="confirm password"
                  name="confirmPassword"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                  })}
                />
                <p
                  className="relative -top-8 md:left-72 left-44 text-gray-400"
                  checked={showConfirmPassword}
                  onClick={handleConfirmToggle}
                >
                  {showConfirmPassword ? (
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
                {match && (
                  <p className="text-red-600">Passwords do not match</p>
                )}
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600">Confirm Password is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL Link"
                  className="input input-bordered"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control mt-3">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-right px-4 mr-5 -mt-5">
              <small>
                Already have a account ?{" "}
                <Link className="text-blue-700" to="/login">
                  {" "}
                  Login
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

export default Register;
