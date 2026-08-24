import Brandmark from "./Brandmark";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-x">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <Brandmark withLogo size="text-lg" />
          <div className="text-sm text-muted-foreground">
            Wholesale breading & spice. Serving USA & Canada.
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Crunch Foods. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

