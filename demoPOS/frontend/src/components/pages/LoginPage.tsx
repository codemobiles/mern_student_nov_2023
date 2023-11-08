import loginBg from "@/assets/images/bg4.jpg";
import * as Icons from "@mui/icons-material/";
import { Alert, Box, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { User } from "@/types/user.type";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/store";
import { add, authSelector, login } from "@/store/slices/authSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const formValidateSchema = Yup.object().shape({
  // username: Yup.string().email("Invalid email address").required("Email is required").trim(),
  username: Yup.string()
    .min(4)
    .required("Username must be more than 3 letters")
    .trim(),
  password: Yup.string().required("Password is required").trim(),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const authReducer = useSelector(authSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAuthenticating(false));
  }, [dispatch]);

  const classes: any = {
    root: { display: "flex", justifyContent: "center", alignItems: "center" },
    submitBtn: { marginTop: 4, marginBottom: 1 },
    canelBtn: { marginTop: 2 },
  };

  const initialValue: User = {
    username: "admin",
    password: "1234",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValue,
    resolver: yupResolver(formValidateSchema),
  });

  const showForm = () => {
    return (
      <form
        noValidate
        onSubmit={handleSubmit(async (values) => {
          const result = await dispatch(login(values));
          if (result.meta.requestStatus == "fulfilled") {
            navigate("/stock");
          }
        })}
      >
        {/* Username */}
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <TextField
              {...field}
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Email />
                  </InputAdornment>
                ),
              }}
              autoComplete="email"
              autoFocus
            />
          )}
        />

        {/* Password */}
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              {...field}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Password />
                  </InputAdornment>
                ),
              }}
              label="Password"
              type="password"
            />
          )}
        />

        {authReducer.isError && <Alert severity="error">Login failed</Alert>}

        <Button
          sx={classes.submitBtn}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={authReducer.isAuthenticating}
        >
          Login
        </Button>

        <Button
          onClick={() => navigate("/register")}
          type="button"
          fullWidth
          variant="outlined"
          className="border-dashed border-1 border-gray-300 mt-4"
          color="primary"
        >
          Register
        </Button>
      </form>
    );
  };

  return (
    <Box className="flex justify-center items-center">
      <Card className="max-w-[345px]">
        <CardContent>
          <Typography gutterBottom variant="h5">
            <div onClick={() => dispatch(add())}>Login {authReducer.count}</div>
          </Typography>
          {showForm()}
        </CardContent>
      </Card>
      <style>
        {`
          body {
            min-height: 100vh;
            position: relative;
            margin: 0;
            background-size: cover;
            background-image: url(${loginBg});
            text-align: center;
          }
        `}
      </style>
    </Box>
  );
};

export default LoginPage;
