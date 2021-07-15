import Works from '../../Works'
import { WorksMainContainer, PageContainer, WorksContentContainer } from './styles'

const DesktopWorks = () => {
  return(
    <PageContainer>

      <WorksMainContainer>
        <WorksContentContainer>
          <h3>Trabalhos</h3>
          <Works />
        </WorksContentContainer>
      </WorksMainContainer>

    </PageContainer>
  )
}

export default DesktopWorks