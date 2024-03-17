import React from 'react';
// import Geocode from 'react-geocode';
import { geocode } from 'react-geocode';

import { setKey } from 'react-geocode';

import { BiCloudUpload } from 'react-icons/bi';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image4 from '../../../../Asset/image4.svg';
import BG from '../../../../Asset/BG.png';
import { TbStarFilled } from 'react-icons/tb';

const extractPostalCode = (place) => {
  let postalCode = null;
  if (place.address_components) {
    place.address_components.forEach((component) => {
      if (component.types.includes('postal_code')) {
        postalCode = component.long_name;
      }
    });
  }
  return postalCode;
};

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantLogo, setRestaurantLogo] = useState(null);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [location, setLocation] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);

  const passwordregx =
    /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  setKey('AIzaSyDE83Koe2R_WZ1oOAt5SDicYKUBcBFLwy0');

  const addressInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      addressInputRef.current
    );

    autocomplete.setFields(['address_components', 'geometry']);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        console.log('No details available for input: ' + place.name);
        return;
      }
    });
  }, []);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRestaurantLogo(file); // Set the file directly
      console.log('Selected Image File:', file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!firstName) {
      errors.firstName = 'First Name is required';
    } else if (!lastName) {
      errors.lastName = 'Last Name is required';
    } else if (!restaurantName) {
      errors.restaurantName = 'Restaurant Name is required';
    } else if (!restaurantLogo) {
      errors.restaurantLogo = 'Logo is required';
    } else if (!email) {
      errors.email = 'Email is required';
    } else if (!phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (phoneNumber.length !== 11) {
      errors.phoneNumber = 'Phone number must be 11 digits';
    } else if (!passwordregx.test(password)) {
      errors.password =
        'Password must contain at least one uppercase, lowercase, number, and symbol';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    } else if (!registrationNumber) {
      errors.registrationNumber = 'Registration Number is required';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setShowSpinner(true);
      register();
    } else {
      setTimeout(() => {
        setFormErrors({});
      }, 5000);
    }
  };

  const register = async () => {
    try {
      console.log('Restaurant Logo:', restaurantLogo);

      const response = await geocode('address', location);
      console.log(response);

      const lat = response.results[0].geometry.location.lat;
      const lng = response.results[0].geometry.location.lng;
      const postalCode = extractPostalCode(response.results[0]);

      const coordinates = {
        latitude: lat,
        longitude: lng,
      };

      const formData = new FormData();
      // formData.append(
      //   'coordinates',
      //   JSON.stringify({ latitude: lat, longitude: lng })
      // );
      formData.append('latitude', lat);
      formData.append('longitude', lng);
      formData.append('firstname', firstName);
      formData.append('lastname', lastName);
      formData.append('email', email);
      formData.append('restaurantName', restaurantName);
      formData.append('password', password);
      formData.append('phoneNumber', phoneNumber);
      formData.append('address', location);
      formData.append('code', postalCode);
      formData.append('image', restaurantLogo);

      // const requestData = {
      //   coordinates: {
      //     latitude: lat,
      //     longitude: lng,
      //   },
      //   firstname: firstName,
      //   lastname: lastName,
      //   email: email,
      //   restaurantName: restaurantName,
      //   password: password,
      //   phoneNumber: phoneNumber,
      //   address: location,
      //   code: postalCode,
      //   image: restaurantLogo,
      // };

      const registerResponse = await fetch(
        'https://swifdropp.onrender.com/api/v1/restaurant',
        {
          method: 'POST',
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          body: formData,
        }
      );

      if (registerResponse.ok) {
        const responseData = await registerResponse.json();
        console.log('Registration successful:', responseData);
        navigate('/signin');
      } else {
        const errorData = await registerResponse.json();
        console.error('Registration failed:', errorData);

        if (errorData.error) {
          setFormErrors({ serverError: errorData.error });
        }
      }
    } catch (error) {
      console.error('Error registering restaurant:', error);
      setFormErrors({ serverError: 'Network error. Please try again later.' });
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <section className="section1">
      <div className="left-box">
        <img className="img1" src={image4} alt="" />
        <div className="bottom-content">
          <span className="star">
            <TbStarFilled />
            <TbStarFilled />
            <TbStarFilled />
            <TbStarFilled />
            <TbStarFilled />
          </span>
          <p className="word">
            "We love Swiftdrop we've been getting and managing orders
            seamlessly, it's definately a restaurant's dream come true"
          </p>
          <div className="ratings">
            <img src={BG} alt="" />
            <div>
              <p className="name">Fiyin Oladejo</p>
              <p className="founder">Founder, Tasty Natives</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <h1>Become our Partner</h1>

        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="left-form">
              <div className="form_control">
                <label htmlFor="First name">First name</label>
                <input
                  defaultValue={firstName}
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label htmlFor="First name">Restaurant's name</label>
                <input
                  defaultValue={restaurantName}
                  type="text"
                  onChange={(e) => setRestaurantName(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label htmlFor="First name">Email</label>
                <input
                  defaultValue={email}
                  //   required
                  type="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label htmlFor="First name">Password</label>
                <input
                  defaultValue={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label htmlFor="First name">CAC registration number</label>
                <input
                  defaultValue={registrationNumber}
                  //   required
                  type="text"
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="right-form">
              <div className="form_control">
                <label htmlFor="First name">Last name</label>
                <input
                  defaultValue={lastName}
                  //   required
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label htmlFor="">Restaurants Logo</label>
                <div className="upload-container">
                  {/* Custom file input button */}
                  <label
                    htmlFor="uploadInput"
                    className="custom-upload-label"
                    // onClick={handleUploadClick}
                  >
                    <BiCloudUpload className="icon" />
                    Upload Logo
                  </label>

                  <input
                    defaultValue={restaurantLogo}
                    type="file"
                    id="uploadInput"
                    accept="image/*"
                    className="hidden-input"
                    // required
                    onChange={handleFileInputChange}
                  />
                </div>
              </div>

              <div className="form_control">
                <label htmlFor="First name">Phone number</label>
                <input
                  defaultValue={phoneNumber}
                  //   required
                  type="text"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label htmlFor="First name">Confirm Password</label>
                <input
                  defaultValue={confirmPassword}
                  //   required
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label htmlFor="First name">Enter location</label>
                <input
                  id="address"
                  ref={addressInputRef}
                  defaultValue={location}
                  //   required
                  type="text"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </div>
          {formErrors.serverError && (
            <p className="error-message">{formErrors.serverError}</p>
          )}

          {formErrors.firstName && (
            <p className="error-message">{formErrors.firstName}</p>
          )}
          {formErrors.lastName && (
            <p className="error-message">{formErrors.lastName}</p>
          )}
          {formErrors.restaurantName && (
            <p className="error-message">{formErrors.restaurantName}</p>
          )}

          {formErrors.phoneNumber && (
            <p className="error-message">{formErrors.phoneNumber}</p>
          )}

          {formErrors.password && (
            <p className="error-message">{formErrors.password}</p>
          )}

          {formErrors.confirmPassword && (
            <p className="error-message">{formErrors.confirmPassword}</p>
          )}
          {formErrors.email && (
            <p className="error-message">{formErrors.email}</p>
          )}
          {formErrors.registrationNumber && (
            <p className="error-message">{formErrors.registrationNumber}</p>
          )}

          <button className="signup-btn" type="submit" disabled={showSpinner}>
            {showSpinner ? (
              <div className="d-flex align-items-center justify-content-center">
                <div
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <span>Loading...</span>
              </div>
            ) : (
              'Sign up'
            )}
          </button>
        </form>
        <div className="navigate">
          <p>Already have an account?</p>
          <Link className="link1" to="/signin">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
