import Breadcrumb from 'react-bootstrap/Breadcrumb';

const breadCrumb = function BreadcrumbData(crumb) {
  
  return (
    <Breadcrumb>
      <Breadcrumb.Item href={crumb[0]['href']}>{crumb[0]['level']}</Breadcrumb.Item>
      <Breadcrumb.Item href={crumb[1]['href']}> {crumb[1]['level']} </Breadcrumb.Item>
      <Breadcrumb.Item active>{crumb[2]['level']}</Breadcrumb.Item>
    </Breadcrumb>
  );

  
}

export default breadCrumb;
