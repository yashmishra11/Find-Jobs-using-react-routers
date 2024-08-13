import { NavLink, Outlet } from "react-router-dom"

function HelpLayouts() {
  return (
    <div className="help-layout">
      <h2>Help & Support</h2>
      <hr color="#d45333" width="96.5%" size="3" noshade/><br /><br />

        <h3>Welcome to Our Help Page</h3>

        <p><br />Finding a job can be challenging, but we’re here to make the process as smooth as possible. This Help Page provides answers to common questions and guides you through using our platform. If you need further assistance, don't hesitate to contact our support team.
        </p>
        <h3>Contact Us</h3>
        <p>Still need help? Our support team is here for you! <br /><br />

        Email :-  support@findingjob.com <br />
        Phone :-  +1-800-123-4567  <br />
        Live Chat :-  Available Monday to Friday, 9 AM - 6 PM (EST) <br /> <br />
        We're committed to making your job search experience as smooth as possible. Don't hesitate to reach out with any questions or concerns.
        <br /><br />
        <strong>*Feedback*</strong>
        <br />We value your feedback! If you have any suggestions or comments on how we can improve our platform, please let us know. Your input helps us create a better experience for everyone.

        Thank you for choosing Finding Job. We're here to help you find your next opportunity!

</p>
  <nav>
    <NavLink to = 'faq'>View the FAQ</NavLink>
    <NavLink to = "contact">Contact Us</NavLink>
  </nav>  
  <Outlet />    
    </div>
  )
}

export default HelpLayouts
