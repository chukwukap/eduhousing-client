import { useRouter } from "next/router";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbConfig {
  [key: string]: {
    title: string;
    href?: string;
  };
}

const breadcrumbConfig: BreadcrumbConfig = {
  "/": { title: "Home", href: "/" },
  "/products": { title: "Products", href: "/products" },
  "/products/[id]": { title: "Product Details" },
  // Add more routes and their corresponding titles here
};

const useBreadcrumb = () => {
  const router = useRouter();

  const generateBreadcrumbItems = (): BreadcrumbItem[] => {
    const asPathSegments = router.asPath
      .split("/")
      .filter((segment) => segment !== "");
    const breadcrumbItems: BreadcrumbItem[] = [];

    for (let i = 0; i < asPathSegments.length; i++) {
      const path = `/${asPathSegments.slice(0, i + 1).join("/")}`;
      const config = breadcrumbConfig[path] || { title: asPathSegments[i] };
      const href =
        config.href || (i === asPathSegments.length - 1 ? undefined : path);

      breadcrumbItems.push({
        title: config.title,
        href,
      });
    }

    return breadcrumbItems;
  };

  return {
    breadcrumbItems: generateBreadcrumbItems(),
  };
};

export default useBreadcrumb;
