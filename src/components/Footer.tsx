const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="text-center">
          <p className="mono text-sm text-muted-foreground">
            Designed & Built by{" "}
            <span className="text-primary">Sridhar S</span>
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
