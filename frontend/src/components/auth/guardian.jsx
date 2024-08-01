import { useEffect } from "react";
import { useRouter } from "next/router";
import { checkTokenExpiration } from "./auth";
import Swal from "sweetalert2";

const withGuardian = (WrappedComponent) => {
  const Guardian = (props) => {
    const router = useRouter();

    useEffect(() => {
      const handleTokenCheck = async () => {
        const isValid = await checkTokenExpiration();
        if (!isValid) {
          Swal.fire({
            icon: "error",
            title: "Su sesión expiró",
            text: "Su sesión expiró por favor vuelva a ingresar sus credenciales",
            timer: 3000,
            showConfirmButton: false,
          }).then(() => {
            router.push("/login");
          });
        }
      };

      handleTokenCheck();
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  Guardian.displayName = `WithGuardian(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return Guardian;
};

export default withGuardian;
