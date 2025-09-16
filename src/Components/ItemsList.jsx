import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ItemsList = ({ itemData }) => {
    console.log(itemData);

    return (
        <>

            {itemData?.categories
                ? <>
                    {itemData.categories.map((categoryname) => {
                        return (
                            <Accordion key={categoryname?.categoryId}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography component="span">{categoryname.title}</Typography>
                                </AccordionSummary>
                                {categoryname.itemCards.map((item) => {
                                    return (
                                        <AccordionDetails>
                                            {item?.card?.info?.name}
                                        </AccordionDetails>
                                    )
                                })}
                            </Accordion >
                        )
                    })}

                </>
                :
                <>
                    {
                        itemData?.itemCards?.map((item) => {
                            return <AccordionDetails>
                                {item.card.info.name}
                            </AccordionDetails>

                        })
                    }
                </>
            }
        </>
    )
}

export default ItemsList