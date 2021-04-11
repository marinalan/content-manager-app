import { useRouter } from "next/router";
import axios from "axios";
import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";

const ResourceCreate = (formData) => {
  const router = useRouter();

  const createResource = formData => {
    axios.post("/api/resources", formData)
      .then(_ => router.push("/"))
      .catch(err => alert(err?.response?.data));
  };

  return (
    <Layout>
      <ResourceForm 
        subtitle="Add New Resource"
        onFormSubmit={createResource}
      />
    </Layout>

  )
}

export default ResourceCreate;