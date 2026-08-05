import Button from '../Button/Button'
import './PageHeader.css'

export default function PageHeader({ 
  title = 'Heading',
  showShareButton = true,
  className = '' 
}) {
  return (
    <div className={`page-header ${className}`}>
      <h1 className="page-header__title">
        {title}
      </h1>
      {showShareButton && (
        <Button 
          label="SHARE" 
          colour="transparent-white" 
          size="medium" 
        />
      )}
    </div>
  )
}