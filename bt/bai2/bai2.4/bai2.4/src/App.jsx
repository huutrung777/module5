import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
      <div
          className="d-flex justify-content-center align-items-center vh-100"
          style={{
            background: 'linear-gradient(to right, #4facfe, #00f2fe)'
          }}
      >
        <div
            className="card shadow-lg border-0 p-4"
            style={{
              width: '400px',
              borderRadius: '20px'
            }}
        >
          {/* Title */}
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">
              Welcome Back
            </h2>

            <p className="text-muted">
              Sign in to continue
            </p>
          </div>

          {/* Form */}
          <form>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Email
              </label>

              <input
                  type="email"
                  className="form-control rounded-pill"
                  placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Password
              </label>

              <input
                  type="password"
                  className="form-control rounded-pill"
                  placeholder="Enter your password"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="d-flex justify-content-between mb-3">
              <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                />

                <label
                    className="form-check-label"
                    htmlFor="remember"
                >
                  Remember me
                </label>
              </div>

              <a
                  href="#"
                  className="text-decoration-none"
              >
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
                type="submit"
                className="btn btn-primary w-100 rounded-pill py-2"
            >
              Sign In
            </button>

          </form>

          {/* Footer */}
          <div className="text-center mt-4">
          <span className="text-muted">
            Don't have an account?
          </span>

            <a
                href="#"
                className="text-decoration-none ms-2"
            >
              Register
            </a>
          </div>

        </div>
      </div>
  )
}

export default App