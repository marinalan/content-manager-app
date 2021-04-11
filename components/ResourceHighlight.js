import Link from 'next/link';
import moment from "moment";
import ResourceLabel from "components/ResourceLabel";

const ResourceHighlight = ({resources}) => {
  return (
    <section className="hero">
      <div className="hero-body">
          {
            resources.map(resource => {
              return (
                <section className="section" key={resource.id}>
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(resource.createdAt).format("LLL")}
                      <ResourceLabel status={resource.status} />
                    </h2>
                    <h1 className="title">{resource.title}</h1>
                    <p className="mb-2">{resource.description}</p>
                    <Link href={`/resources/${resource.id}`}>
                      <a className="button is-light">
                        Details
                      </a>
                    </Link>
                  </div>
                </section>
              )
            })
          }
        </div>
    </section>
  )
}

export default ResourceHighlight