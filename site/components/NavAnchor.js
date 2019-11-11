export const NavAnchor = props => {

  console.log('#,:::#', props);
  
  const { foreground, gridSize, mq, fontSizes } = props;
  const paddingHorizontal = [gridSize, gridSize, gridSize * 3];
  const paddingVertical = gridSize;
  const slots  = {
    children: props.children,
    href: props.href
  } 

  return (
    <a
      css={mq({
        color: foreground,
        display: 'inline-block',
        fontSize: fontSizes.sm,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingBottom: paddingVertical,
        paddingTop: paddingVertical,
        textDecoration: 'none',

        ':hover': {
          textDecoration: 'underline',
        },
      })}
      {...slots}
    />
  );
};